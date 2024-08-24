import Card from "./components/Card/Card";
import EnviloupMainCard from "./components/EnviloupMainCardSection/EnviloupMainCardSection";
import EnviloupSideCardSection from "./components/EnviloupSideCardSection/EnviloupSideCardSection";
import WaveBackground from "./components/WaveBackground/WaveBackground";
import Header from "./components/Header/Header";
import Paragraph from "./components/Paragraph/Paragraph";

function App() {
  return (
    <>
      <WaveBackground>
        <div className="flex flex-col items-center h-full gap-8 pt-12 pb-12">
          <Card className="rotate-[4deg] sm:mb-6 md:mb-8 lg:mb-12">
            <EnviloupMainCard />
          </Card>
          <Card>
						<EnviloupSideCardSection>
							<Header>Enviloup</Header>
							<Paragraph>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia suscipit architecto incidunt illo minus fugit numquam odio similique corrupti dolores doloribus ab esse, aspernatur officia adipisci cumque dolore pariatur molestias?
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia suscipit architecto incidunt illo minus fugit numquam odio similique corrupti dolores doloribus ab esse, aspernatur officia adipisci cumque dolore pariatur molestias?
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia suscipit architecto incidunt illo minus fugit numquam odio similique corrupti dolores doloribus ab esse, aspernatur officia adipisci cumque dolore pariatur molestias?
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia suscipit architecto incidunt illo minus fugit numquam odio similique corrupti dolores doloribus ab esse, aspernatur officia adipisci cumque dolore pariatur molestias?
							</Paragraph>
            </EnviloupSideCardSection>
          </Card>
        </div>
      </WaveBackground>
    </>
  );
}

export default App;
