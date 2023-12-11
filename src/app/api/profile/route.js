import mongoose from "mongoose";
import { getServerSession} from "next-auth"
import { authOption } from "../auth/[...nextauth]/route";
import { User } from "@/models/User";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";


// update etme datayi
export async function PUT(req) {
    mongoose.connect(process.env.MONGO_URL);
    const data = await req.json();
    const session = await getServerSession(authOption);
    const email = session.user.email;

    if ('name' in data) {
        //update user name
        await User.updateOne({email}, { name:data.name});
       
    }
    return Response.json(true)
}


        // DELETE DATA !!!
        export async function DELETE(req, res) {
            try {
              mongoose.connect(process.env.MONGO_URL);
          
              const session = await getServerSession(authOption);
          
              // Check if the session is authenticated
              if (!session || !session.user || !session.user.email) {
                return res.status(401).json({ success: false, message: 'Unauthorized' });
              }
          
              const email = session.user.email;
          
              // Find and delete the user based on the email
              const deletedUser = await User.findOneAndDelete({ email });
          
              if (deletedUser) {
                return res.json({ success: true, message: 'User deleted successfully' });
              } else {
                return res.status(404).json({ success: false, message: 'User not found' });
              }
            } catch (error) {
              console.error('Error deleting user:', error);
              return res.status(500).json({ success: false, message: 'Internal server error' });
            } finally {
              mongoose.disconnect(); // Close the MongoDB connection
            }
          }