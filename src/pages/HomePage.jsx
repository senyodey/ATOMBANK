import RectangleInfo from '../components/RectangleInfo';
import Overview from './../components/Overview';
import ObjectivesOne from './../components/ObjectivesOne';
import ObjectivesTwo from './../components/ObjectivesTwo';
import ObjectivesThree from './../components/ObjectivesThree';
import SubscribeNewsLetter from '../components/SubscribeNewsLetter';


function HomePage() {
  return <>
  <Overview/>
  <RectangleInfo/>
  <div className='lg:mx-32 space-y-20 text-center mb-16'>
  <ObjectivesOne/>
  <ObjectivesTwo/>
  <ObjectivesThree/>

  </div>
  <SubscribeNewsLetter/>

    </>;
}

export default HomePage;
