export default function Header() {
  return (

      <header className="text-white text-center d-flex align-items-center" style={{
        backgroundImage: "url('./public/Header.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: '400px',
        width: '100%'
      }}>
        <div className='container text-center'>
            <h1 className='display-4'>¡Pizzería Mamma Mia!</h1>
            <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
        </div>
      </header>

  )
}
