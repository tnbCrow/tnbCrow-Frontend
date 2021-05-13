interface Props {
  step: Steps
}

export enum Steps {
  AgreeToTerms = "AgreeToTerms",
  SellerSubmitsPayment = "SellerSubmitsPayment",
  BuyerMakesPayment = "BuyerMakesPayment",
  SellerApproval = "SellerApproval",
  Release = "Release",
}

const component = {
  AgreeToTerms: {
    image: <img className="w-20 h-20" src="/assets/AgreeToTerms.svg" />,
    text: "1. Buyer and Seller agree to terms",
  },
  SellerSubmitsPayment: {
    image: <img className="w-20 h-20" src="/assets/SellerSubmitsPayment.svg" />,
    text: "2. Seller submits payment to tnbCrow.",
  },
  BuyerMakesPayment: {
    image: <img className="w-20 h-20" src="/assets/BuyerMakesPayment.svg" />,
    text: "3. Buyer makes payment to seller.",
  },
  SellerApproval: {
    image: (
      <img className="w-20 h-20" src="/assets/SellerApprovesPayment.svg" />
    ),
    text: "4. Seller  approves payment.",
  },
  Release: {
    image: <img className="w-20 h-20" src="/assets/Release.svg" />,
    text: "5. tnbCrow releases payment to Buyer.",
  },
}

export const HowItWorksStep = ({ step }: Props) => {
  return (
    <div className="col-span-2 py-2 md:py-0 md:col-span-1 justify-center text-center">
      <div className="flex justify-center text-center items-center">
        {component[step]?.image}
      </div>
      <span className="text-xs sm:text-sm md:text-md">
        {component[step]?.text}
      </span>
    </div>
  )
}
