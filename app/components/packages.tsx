import React, { useEffect } from 'react';

interface PackageProps {
  title: string;
  price: number;
  originalPrice: number | null;
  discount: number | null;
  validity: string;
  features: string[];
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

const Package: React.FC<PackageProps> = ({ title, price, originalPrice, discount, validity, features }) => {
  const handlePayment = () => {
    const options = {
      key: 'rzp_live_9DkQiOOCkTzPLt', // Replace with your actual Razorpay key ID
      amount: price * 100, // Amount in paise
      currency: 'INR',
      name: 'Matdoc',
      description: title,
      handler: function (response: any) {
        alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
        // You can add additional logic here, like making an API call to your server
      },
      prefill: {
        name: '',
        email: '',
        contact: '',
      },
    };

    const razorpayInstance = new window.Razorpay(options);
    razorpayInstance.open();
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 border border-gray-200">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        {originalPrice && <p className="text-gray-700 text-base line-through">₹{originalPrice}</p>}
        <p className="text-gray-900 text-2xl">₹{price}</p>
        {discount && <p className="text-green-500">Save ₹{discount}</p>}
        <p className="text-gray-500 text-sm">Valid till {validity}</p>
        <ul className="list-disc list-inside mt-2">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <button 
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handlePayment}
        >
          Purchase @ ₹{price} +GST
        </button>
      </div>
    </div>
  );
};

const Packages: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const packages = [
    {
      title: "NEET UG PRO",
      price: 499,
      originalPrice: 2499,
      discount: 2000,
      validity: "September 30, 2024",
      features: [
        "Allotments",
        "Closing Ranks",
        "Seat Matrix",
        "Fee, Stipend and Bond",
        "My Choice List",
        "Institutes",
        "Courses",
        "Universities",
        "Counsellings"
      ]
    },
    {
      title: "NEET UG Standard",
      price: 399,
      originalPrice: 2099,
      discount: 1700,
      validity: "September 30, 2024",
      features: [
        "Allotments",
        "Closing Ranks",
        "Seat Matrix",
        "Fee, Stipend and Bond",
        "My Choice List",
        "Institutes",
        "Courses",
        "Universities",
        "Counsellings"
      ]
    },
    {
      title: "MatDoc NEET MDS 2024 - All India Counseling",
      price: 799,
      originalPrice: null,
      discount: null,
      validity: "October 21, 2024",
      features: [
        "Allotments",
        "Closing Ranks",
        "My Choice List",
        "Institutes",
        "Courses",
        "Universities"
      ]
    },
    {
      title: "MatDoc INICET PG (July 2024) - Information Plan",
      price: 999,
      originalPrice: null,
      discount: null,
      validity: "August 31, 2024",
      features: [
        "Allotments",
        "Closing Ranks",
        "My Choice List",
        "Institutes",
        "Courses",
        "Universities"
      ]
    }
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {packages.map((pkg, index) => (
        <Package key={index} {...pkg} />
      ))}
    </div>
  );
};

export default Packages;