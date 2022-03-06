

function Form() {
    return (
        <form action="" className='bg-white m-1 p-1.5 grid grid-cols-1 md:grid-cols-2 pb-5'>

            <label htmlFor='source'>From<span className='text-red-500 space-y-1'>*</span> </label><br />
            <input list="cities" name="source" aria-required='true' placeholder='Source City' className='rounded-md border-2 text-gray-600 pl-2' />
            <datalist id="cities">
                <option value="Mumbai,MH" />
                <option value="Nagpur,MH" />
                <option value="Raipur,CG" />
                <option value="Bhopal,MP" />
                <option value="Jaipur,RJ" />
            </datalist>

            <label htmlFor='destination' >To<span className='text-red-500 space-y-1'>*</span></label><br />
            <input list="cities" name="destination" aria-required='true' placeholder='Destination City' className='rounded-md border-2 text-gray-600 pl-2' />
            <datalist id="cities" aria-required='true'>
                <option value="Mumbai,MH" />
                <option value="Nagpur,MH" />
                <option value="Raipur,CG" />
                <option value="Bhopal,MP" />
                <option value="Jaipur,RJ" />
            </datalist>

            <label htmlFor="material">Material<span className='text-red-500 space-y-1'>*</span></label><br />
            <select id="material" name="material" aria-required='true' className='bg-transparent rounded-md border-2 text-gray-600 pl-2'>
                <option value="select" selected>Select</option>
                <option value="auto parts">Auto Parts</option>
                <option value="bardana" >Bardana jute or plastic</option>
                <option value="cement">Cement</option>
                <option value="chemicals">Chemicals</option>
                <option value="coal">Coal</option>
                <option value="cotton">Cotton Seed</option>
                <option value="electronics">Electronics</option>
                <option value="fertilizer">Fertilizers</option>
                <option value="fruits">Fruits and Vegetables</option>
                <option value="furniture">Furniture and Wood Products</option>
                <option value="iron">Iron sheets or bars or scrap</option>
                <option value="liquiddrum">Liquids in Drum</option>
                <option value="liquid" >Liquids/Oil</option>
                <option value="machine">Machinery</option>
                <option value="medical">Medical Equipments</option>
                <option value="medicine">Medicines</option>
                <option value="metal">Metals</option>
                <option value="food">Packed Foods</option>
                <option value="pipes">Plastic Pipes</option>
                <option value="paper">Books or Paper rolls</option>
                <option value="goods">Refrigerated Goods</option>
                <option value="agri">Agriculture Products</option>
                <option value="spices">Spices</option>
                <option value="textile">Textile Products</option>
                <option value="rubber">Tyres or Rubber Products</option>
                <option value="vehicle">Vehicles</option>
                <option value="others">Others</option>
            </select>

            <label htmlFor="weight">Weight (MT)<span className='text-red-500'>*</span></label><br />
            <select id="weight" name="weight" aria-required='true' className='bg-transparent rounded-md border-2 text-gray-600 pl-2'>
                <option value="select" selected>Select</option>
                <option value="5mt">Upto 5 MT</option>
                <option value="7mt">Upto 7 MT</option>
                <option value="9mt">Upto 9 MT</option>
                <option value="12mt">Upto 12 MT</option>
                <option value="15mt">Upto 15 MT</option>
                <option value="20mt">Upto 20 MT</option>
                <option value="25mt">Upto 25 MT</option>
                <option value="28mt">Upto 28 MT</option>
                <option value="30mt">Above 30 MT</option>
                <option value="others">Do not Know</option>
            </select>

            <label htmlFor="truck">Truck Type<span className='text-red-500 space-y-1'>*</span></label><br />
            <select id="truck" name="truck" aria-required='true' className='bg-transparent rounded-md border-2 text-gray-600 pl-2'>
                <option value="select" selected>Select</option>
                <option value="canter">Canter Jumbo</option>
                <option value="canter17">Canters 17ft/4 wheels</option>
                <option value="canter19">Canters 19ft/6 wheels</option>
                <option value="canter3">Canters 3MT/4 wheels</option>
                <option value="container32">Container Close Body 32ft</option>
                <option value="container40">Container Close Body 40ft</option>
                <option value="container">Container Trucks</option>
                <option value="flat32">Flat Bed Trailers 32ft</option>
                <option value="flat40">Flat Bed Trailers 40ft</option>
                <option value="lowbed">Low Bed Trailers</option>
                <option value="multiaxle">Multi Axle Trailers</option>
                <option value="tanker">Tanker Trucks/6 wheels</option>
                <option value="tata407">Tata 407 2.5MT/4 wheels</option>
                <option value="trailer28">Trailer 28MT/18 wheels</option>
                <option value="trailer">Trailer 4923</option>
                <option value="truck9">Truck 9MT/6 wheels</option>
                <option value="truck15">Truck 15MT/10 wheels</option>
                <option value="truck20">Truck 20MT/12 wheels</option>
                <option value="truck25">Truck 25MT/14 wheels</option>
            </select>

            <label htmlFor="truck">No. of Trucks<span className='text-red-500 space-y-1'>*</span></label><br />
            <input type="number" id="truck" min={1} placeholder='No. of Trucks required' className='bg-transparent rounded-md border-2 text-gray-600 pl-2' />

            <label htmlFor="pickupdate">Pickup Date<span className='text-red-500 space-y-1'>*</span></label><br />
            <input type="datetime-local" id="pickupdate" placeholder='No. of Trucks required' className='bg-transparent rounded-md border-2 text-gray-600 pl-2' />

            <button type="submit" className="bg-red-400 rounded-md w-[6rem] p-1 mt-5 mr-auto ml-auto  md:mt-0 text-white active:scale-95 transition transform duration-100">Submit</button>
        </form>
    )
}

export default Form