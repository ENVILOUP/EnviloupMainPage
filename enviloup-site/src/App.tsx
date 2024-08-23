import Card from "./components/Card/Card";
import EnviloupMainCard from "./components/EnviloupMainCardSection/EnviloupMainCardSection";
import EnviloupSideCardSection from "./components/EnviloupSideCardSection/EnviloupSideCardSection";
import WaveBackground from "./components/WaveBackground/WaveBackground";
import EnviloupSideCardSection_styles from "./components/EnviloupSideCardSection/EnviloupSideCardSection.module.scss";

function App() {
  return (
    <>
      <WaveBackground>
        <div className="flex flex-col items-center h-full gap-8 pt-12 pb-12">
          <Card classNames="w-3/5 h-3/4 p-6 rotate-[4deg] mb-12">
            <EnviloupMainCard />
          </Card>
          <Card classNames="h-3/4">
            <EnviloupSideCardSection>
              <h1 className={EnviloupSideCardSection_styles.EnviloupHeader}>Enviloup</h1>
              <p className={EnviloupSideCardSection_styles.EnviloupParagraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisi lacus, pharetra eget sodales id, vestibulum in odio. Proin ac erat id urna scelerisque vehicula id in enim. Proin eu purus feugiat, ultrices lacus sit amet, fermentum nisl. Praesent vel odio massa. Cras sit amet mi at arcu elementum tristique. Nam interdum rutrum tempor. Sed elementum tristique arcu, ut porttitor lacus mollis vitae. Praesent pharetra pretium tellus. Etiam ac consequat diam, ut accumsan turpis. Curabitur turpis enim, finibus et risus volutpat, sodales volutpat velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec porttitor id lorem a viverra. In maximus ut tortor lacinia imperdiet. In sodales ornare mi, id ullamcorper turpis tincidunt sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
Maecenas vel ligula arcu. Vivamus et lacinia augue, non tempor mi. Etiam nunc turpis, malesuada nec erat et, scelerisque tempus sapien. Vivamus bibendum imperdiet erat, et porta erat dignissim convallis. Integer sit amet scelerisque mi, at ornare leo. Nullam vestibulum vel justo et placerat. Aenean tempus, magna sed auctor placerat, erat orci imperdiet velit, et bibendum purus erat et massa. Aenean suscipit urna neque, bibendum porttitor odio tincidunt ac. Proin congue erat id nulla facilisis mattis. Pellentesque lacinia consequat tellus et faucibus.
Maecenas et quam lorem. Nam enim arcu, volutpat sit amet sodales vitae, lacinia eu diam. Quisque id odio feugiat, feugiat orci in, tempor eros. Integer tincidunt nisl nec tellus interdum malesuada. Fusce placerat semper tristique. Donec at mattis metus. Curabitur nec convallis ante, non ultricies leo. Fusce non orci congue, volutpat metus sed, interdum turpis. Phasellus non nisi non nisl viverra mollis. Maecenas maximus faucibus odio vitae dictum. Aliquam urna mi, porta eget cursus eget, tempor vitae eros. Ut dapibus sollicitudin justo, vitae varius libero commodo sit amet.
Duis hendrerit id neque id vulputate. Nullam vel libero sapien. Donec eget pellentesque purus. Nunc maximus eros nisl, vitae dictum ipsum tincidunt vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec velit nisl, imperdiet non fringilla nec, porta in justo. Nullam eget neque porta, aliquam turpis vel, consectetur odio. Maecenas scelerisque quam a semper tempor. Maecenas sed enim consectetur, congue ex tincidunt, ullamcorper sem. Fusce id mollis quam.
Mauris consectetur facilisis tempus. Aenean nibh arcu, scelerisque eu rutrum at, vestibulum vel odio. Pellentesque euismod erat eu tellus scelerisque fringilla. Morbi ornare non urna sed placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sollicitudin lobortis leo, et ornare quam efficitur eu. Duis ullamcorper, massa ut tristique luctus, eros odio dictum lacus, vel posuere enim turpis in erat. Vivamus luctus porttitor sollicitudin. Proin non nunc varius, vulputate ipsum et, bibendum purus.
              </p>
            </EnviloupSideCardSection>
          </Card>
        </div>
      </WaveBackground>
    </>
  );
}

export default App;
