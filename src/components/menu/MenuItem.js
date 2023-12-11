export default function MenuItem () {
    return (
        <div className="bg-gray-200 p-4 rounded-lg text-cente hover:bg-white hover:shadow-md hover:shadow-black/50 transition-all">
            <div className="text-center">
            <img src="/assets/diet6.png" className="max-h-auto max-h-26 block mx-auto" alt="caloriefood" />
            </div>
               
                <h4 className="font-semibold my-3 text-xl">1200 calorie</h4>
                <p className="text-gray-500 text-sm">Lorem ipsum, dolor
                     </p>
                     <button className= "bg-primary mt-4 text-white rounded-full px-4 py-2">
                    Add to cart $12
                     </button>
                     </div>
    )
}

