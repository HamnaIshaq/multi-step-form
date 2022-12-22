import Card from '../components/Card';
import ThankYouIcon from '../assets/images/icon-thank-you.svg';

const ThankYou = () => {
  return (
    <div>
      <div style={{textAlign: 'center'}}>
        <Card 
          heading="Thank you!"
          description="Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free email us at support@loremgaming.com."
          thankYou={ThankYouIcon}
        >
        </Card>
      </div>
    </div>
  );
}

export default ThankYou;