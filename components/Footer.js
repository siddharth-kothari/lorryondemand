

function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <div className="border-t pt-5 pb-5 bg-gray-500">
       <p className="text-white text-center mt-4 mb-4"> © {currentYear}, Lorry On Demand. All Rights Reserved.</p>
    </div>
  )
}

export default Footer