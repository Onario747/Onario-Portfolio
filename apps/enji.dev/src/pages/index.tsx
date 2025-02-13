import Head from '@/components/meta/Head';

import IndexContents from '@/contents/index';

function Index() {
  return (
    <>
      <Head
        title="Onari George · Frontend and Mobile Developer"
        description="An online portfolio featuring a showcase of my projects and some thoughts as a Front-End and Mobile Developer who loves intuitive, clean and modern UI design."
        ogImage="https://i.ibb.co/bMsg8MqJ/Onario.jpg"
        overrideTitle
      />
      <IndexContents />
    </>
  );
}

export default Index;
