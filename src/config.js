const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "dinetoken-wallet-api-dev-attachmentsbucket-17rh6tyoag92i"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://bfk4y0ktx6.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-ease-1",
    USER_POOL_ID: "us-east-1_Y5IzBApas",
    APP_CLIENT_ID: "7mc2p9khfgtb8b1k8q5h25r9i",
    IDENTITY_POOL_ID: "us-east-1:c3c98d66-7588-40c1-94ab-a7e6fccd65b2"
  }
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "dinetoken-wallet-api-prod-attachmentsbucket-1hvhx25lgb751"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://roa6prt2hj.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_WKGngtKep",
    APP_CLIENT_ID: "4qrnm0nh0trloisgs80m68arrr",
    IDENTITY_POOL_ID: "us-east-1:6c4bd9c8-e1da-40ce-b710-f7f00a835dfa"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
