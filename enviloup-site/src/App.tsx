import Card from './components/Card/Card';
import EnviloupMainCard from './components/EnviloupMainCardSection/EnviloupMainCardSection';

function App() {
  return (
    <>
      <div className="h-full bg-gradient-to-r from-gray-900 to-green-800">
        <div className="flex flex-col items-center h-full gap-8 pt-12 pb-12">
          <Card w="3/5" h="3/4" classNames="p-6 rotate-[4deg] mb-12">
            <EnviloupMainCard />
          </Card>
          <Card w="3/5" h="3/4" classNames="p-6">
            <div className="flex justify-around">
              <div className='pr-10'>
                <h1 className="text-5xl text-gray-100 tracking-wide drop-shadow-lg mb-4">
                  Enviloup
                </h1>
                <p className="text-gray-100">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem labore, explicabo eaque animi suscipit
                  voluptatibus quis praesentium voluptatum quas. Accusamus,
                  consequatur maxime debitis aspernatur in tempora ut dicta non
                  omnis.
                </p>
							</div>
							<div>
								<img className='w-[420px]' src="vite.svg" alt="" />
							</div>
            </div>
          </Card>
          <Card w="3/5" h="3/4" classNames="p-6">
            <div>
              <h1 className="text-5xl text-gray-100 tracking-wide drop-shadow-lg mb-4">
                Enviloup
              </h1>
              <p className="text-gray-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem labore, explicabo eaque animi suscipit
                voluptatibus quis praesentium voluptatum quas. Accusamus,
                consequatur maxime debitis aspernatur in tempora ut dicta non
								omnis.
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, voluptatum. Quae fugit id beatae eos, omnis possimus architecto distinctio ipsa reprehenderit aut unde excepturi sint molestiae earum ducimus, aspernatur eum.
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, voluptatum. Quae fugit id beatae eos, omnis possimus architecto distinctio ipsa reprehenderit aut unde excepturi sint molestiae earum ducimus, aspernatur eum.
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, voluptatum. Quae fugit id beatae eos, omnis possimus architecto distinctio ipsa reprehenderit aut unde excepturi sint molestiae earum ducimus, aspernatur eum.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

export default App;