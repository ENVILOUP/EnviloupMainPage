import Card from "./components/Card/Card";
import EnviloupMainCard from "./components/EnviloupMainCardSection/EnviloupMainCardSection";
import EnviloupSideCardSection from "./components/EnviloupSideCardSection/EnviloupSideCardSection";
import WaveBackground from "./components/WaveBackground/WaveBackground";
import Header from "./components/Header/Header";
import Paragraph from "./components/Paragraph/Paragraph";
import Image from "./components/Image/Image";

function App() {
  return (
    <>
      <WaveBackground>
        <div className="flex flex-col items-center h-full gap-8 pt-16 pb-16">
          <Card className="rotate-[4deg] sm:mb-6 md:mb-8 lg:mb-12">
            <EnviloupMainCard />
          </Card>
          <Card>
            <EnviloupSideCardSection>
              <Header>Enviloup</Header>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia suscipit architecto incidunt illo minus fugit numquam
                odio similique corrupti dolores doloribus ab esse, aspernatur
                officia adipisci cumque dolore pariatur molestias? Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Mollitia suscipit
                architecto incidunt illo minus fugit numquam odio similique
                corrupti dolores doloribus ab esse, aspernatur officia adipisci
                cumque dolore pariatur molestias? Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Mollitia suscipit architecto
                incidunt illo minus fugit numquam odio similique corrupti
                dolores doloribus ab esse, aspernatur officia adipisci cumque
                dolore pariatur molestias? Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Mollitia suscipit architecto
                incidunt illo minus fugit numquam odio similique corrupti
                dolores doloribus ab esse, aspernatur officia adipisci cumque
                dolore pariatur molestias?
              </Paragraph>
            </EnviloupSideCardSection>
          </Card>
          <Card>
            <EnviloupSideCardSection>
              <Header>Enviloup</Header>
              <div className="flex flex-col justify-around items-center md:flex-row">
                <Paragraph className="pr-6 pb-4 sm:pb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid amet fuga, reprehenderit non culpa mollitia modi nisi
                  consequatur nemo sint illum unde fugit enim porro similique
                  soluta nesciunt rem laudantium.
                </Paragraph>
								<Image className="md:mb-auto" src="/public/vite.svg" alt="" />
              </div>
            </EnviloupSideCardSection>
          </Card>
        </div>
      </WaveBackground>
    </>
  );
}

export default App;
