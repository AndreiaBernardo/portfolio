import Slider from "react-slick";
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Portfolio = () => {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };


  return (
    <div className='bg-gray-900 min-h-screen pb-5' >
      <header className='bg-gray-300 h-15 text-gray-900 '>
        <nav className='flex justify-center text-center gap-10 p-4 text-lg font-bold '>

          <a href="#Home">Home</a>
          <a href="#Sobre">Sobre</a>
          <a href="#Skills">Habilidades</a>
          <a href="#Portfolio">Portfólio</a>
          <a href="#Contato">Contato</a>
        </nav>


      </header>



      <section id='Home' className="topo container mx-auto p-8 pt-20 text-center">
        <div className='text-fuchsia-600 flex flex-col items-center justify-center h-[calc(100vh-80px)]'>
          <h1 className='text-6xl   font-bold'>Andréia Bernardo Lima Vaz</h1>

          <p className=' mt-10 text-4xl'>Desenvolvedora Front-end</p>

          <button className='font-bold mt-10 bg-fuchsia-600 text-white px-6 py-2 rounded-lg hover:bg-fuchsia-700 transition-colors'>Contate-me</button>

          <div className="text-white mt-5  flex ">
            <a href="https://github.com/AndreiaBernardo" target="_blank" className=" me-5 text-2xl ">
              <i className="bi bi-github  "></i>
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='text-2xl' >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div >

      </section>

      <section id='Sobre' className="container mx-auto p-8 bg-white shadow-md rounded-lg mb-8 text-gray-900">
        <h2 className='font-bold text-3xl'>Sobre mim</h2>
        <p className=' mt-5 text-lg'> Olá! Sou a Andréia Bernardo Lima Vaz, uma desenvolvedora Front End e Back End apaixonada por criar interfaces de usuário incríveis e intuitivas.  Sou proativa em busca de utilizar todo meu conhecimento para poder agregar dentro de uma empresa.

          Boa comunicação, dedicação ao crescimento da organização.

Comprometido com o aprendizado contínuo, pontualidade e assiduidade
        </p>
      </section>

      <section id='Skills' className="container mx-auto p-8 bg-white shadow-md rounded-lg mb-8 text-gray-900">
        <h2 className='font-bold text-3xl'>Habilidades</h2>
        <div className="flex flex-wrap items-center justify-center gap-15 mt-6 p-3 ">
          <img src="/image/html-5.png" alt="html" className='w-20 h-20' />
          <img src="/image/css-3.png" alt="css" className='w-20 h-20' />
          <img src="/image/js.png" alt="javascript" className='w-20 h-20' />
          <img src="/image/react.png" alt="react" className='w-20 h-20' />
          <img src="/image/vite.png" alt="vite" className='w-20 h-20' />
          <img src="/image/tailwind.png" alt="tailwind" className='w-20 h-20' />
          <img src="/image/dbeaver.png" alt="dbeaver" className='w-20 h-20' />
          <img src="/image/Next.js.png" alt="next.js" className='w-20 h-20' />
          <img src="/image/node.png" alt="node" className='w-20 h-20' />
          <img src="/image/prisma.png" alt="prisma" className='w-20 h-20' />
        </div>



      </section>



      <section id='Portfolio' className="container mx-auto p-8 bg-white shadow-md rounded-lg mb-8 flex flex-col items-start">
        <h2 className='font-bold text-3xl '>Portfólio</h2>

        <div className='flex flex-wrap justify-center gap-5 mt-6 p-1'>
              <div className="w-70 h-96 bg-[url('/image/tablet.png')] bg-cover bg-center mt-6 flex flex-col items-center justify-center">
                
                  <div className="w-full px-5 mb-3">
                    <h3 className='text-center font-extrabold text-gray-800 mb-3'>Website</h3>
                    <Slider {...settings}>
                    <div>
                      <img src="/image/tela.PNG" alt="Tela do Projeto" className='card' />
                      </div>
      
                    <div>
                      <img src="/image/sala.jpg" alt="Sala" className='card' />
                    </div>
                    <div>
                      <img src="/image/tela2.PNG " alt="Tela2" className='card' />
                    </div>
                    
          </Slider>
                  </div>
      
      
      
                <div className='flex flex-row gap-2 mt-4'>
                  <button onClick={() => window.open("https://andreiabernardo.github.io/site/", "_blank")} className='bg-gray-800 text-white px-4 py-1 rounded-lg hover:bg-gray-900 transition-colors'> Projeto</button>
                  <button onClick={() => window.open("https://github.com/AndreiaBernardo/site", "_blank")} className='bg-gray-800 text-white px-4 py-1 rounded-lg hover:bg-gray-900 transition-colors'> Repositório</button></div>
      
              </div>

              <div className="w-70 h-96 bg-[url('/image/tablet.png')] bg-cover bg-center mt-6 flex flex-col items-center justify-center ">
                
                  <div className="w-full px-5 mb-3">
                    <h3 className='text-center font-extrabold text-gray-800 mb-3'>Landing Page</h3>
                    <Slider {...settings}>
                    <div>
                      <img src="/image/flor.png" alt="Tela do Projeto" className='card' />
                      </div>
      
                    <div>
                      <img src="/image/flor1.png" alt="flor" className='card' />
                    </div>
                    <div>
                      <img src="/image/flor3.PNG " alt="rodape" className='card' />
                    </div>
                    
          </Slider>
                  </div>
      
      
      
                <div className='flex flex-row gap-2 mt-4'>
                  <button onClick={() => window.open(" https://andreiabernardo.github.io/page/", "_blank")} className='bg-gray-800 text-white px-4 py-1 rounded-lg hover:bg-gray-900 transition-colors'> Projeto</button>
                  <button onClick={() => window.open(" https:https://github.com/AndreiaBernardo/page", "_blank")} className='bg-gray-800 text-white px-4 py-1 rounded-lg hover:bg-gray-900 transition-colors'> Repositório</button></div>
      
              </div>
              <div className="w-70 h-96 bg-[url('/image/tablet.png')] bg-cover bg-center mt-6 flex flex-col items-center justify-center ">
                
                  <div className="w-full px-5 mb-3">
                    <h3 className='text-center font-extrabold text-gray-800 mb-3'>Consumindo Api</h3>
                    <Slider {...settings}>
                    <div>
                      <img src="/image/api.PNG" alt="Tela do Projeto" className='card' />
                      </div>
      
                    <div>
                      <img src="/image/api1.png" alt="Detalhes" className='card' />
                    </div>
                    <div>
                      <img src="/image/api2.PNG " alt="Tela2" className='card' />
                    </div>
                    
          </Slider>
                  </div>
      
      
      
                <div className='flex flex-row gap-2 mt-4'>
                  <button onClick={() => window.open("https://api-delta-hazel.vercel.app/", "_blank")} className='bg-gray-800 text-white px-4 py-1 rounded-lg hover:bg-gray-900 transition-colors'> Projeto</button>
                  <button onClick={() => window.open("https://github.com/AndreiaBernardo/api", "_blank")} className='bg-gray-800 text-white px-4 py-1 rounded-lg hover:bg-gray-900 transition-colors'> Repositório</button></div>
      
              </div>


              <div className="w-70 h-96 bg-[url('/image/tablet.png')] bg-cover bg-center mt-6 flex flex-col items-center justify-center ">
                
                  <div className="w-full px-5 mb-3">
                    <h3 className='text-center font-extrabold text-gray-800 mb-3'>
                      Site para confirmação 
                    </h3>

                    <Slider {...settings}>
                    <div>
                      <img src="/image/site1.png" alt="Tela do Projeto" className='card' />
                      </div>
      
                    <div>
                      <img src="/image/site2.png" alt="admin"
                       className='card' />
                    </div>
                    <div>
                      <img src="/image/site3.JPG" alt="Tela2" className='card' />
                    </div>
                    
          </Slider>
                  </div>
      
      
      
                <div className='flex flex-row gap-2 mt-3'>
                  <button onClick={() => window.open("https://site-confirma.vercel.app/", "_blank")} className='bg-gray-800 text-white px-4 py-1 rounded-lg hover:bg-gray-900 transition-colors'> Projeto</button>
                  <button onClick={() => window.open("https://github.com/AndreiaBernardo/Site-confirma.git", "_blank")} className='bg-gray-800 text-white px-4 py-1 rounded-lg hover:bg-gray-900 transition-colors'> Repositório</button></div>
      
              </div>
              </div>
      
        
                </section>


      <section id='Contato' className="container mx-auto p-8 bg-white shadow-md rounded-lg mb-8">

        <h2 className='font-bold text-3xl'>Contato</h2>
      <div className='mt-3 text-gray-900'>
        <p >
          <strong>Email:</strong> 1andreia.lima.03@gmail.com
        </p>
        <p>
          <strong>Telefone:</strong> +55 (61) 98270-1331
          </p>
          <p>
            <strong>Endereço:</strong> Brasília, DF, Brasil 
          </p>
          
          </div>
        

          
      </section>
    </div>

  )
}

export default Portfolio
