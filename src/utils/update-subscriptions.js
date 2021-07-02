import {
  CognitoUserPool,
  CognitoUserAttribute
} from 'amazon-cognito-identity-js'

export const updateSubscriptions = async (topic, action) => {
  try {
    const poolData = {
      UserPoolId: process.env.GATSBY_COGNITO_USER_POOL_ID,
      ClientId: process.env.GATSBY_COGNITO_CLIENT_ID, 
    }
    const userPool = new CognitoUserPool(poolData)
    
    const authenticatedUser = await userPool.getCurrentUser()

    if (authenticatedUser != null) {
      authenticatedUser.getSession(function(err, session) {
        if (err) {
          console.log(err.message || JSON.stringify(err))
          return
        }
        let attributeList = []
        let subscriptionName, subscriptionValue
        if (topic === "Photography") 
          subscriptionName = "custom:photography_sub"
        else if (topic === "DigitalArt") 
          subscriptionName = "custom:digitalart_sub"
        else
          subscriptionName = "custom:watercolour_sub"
        
        subscriptionValue = action === "subscribe" ? 'Y' : 'N'

        const attribute = new CognitoUserAttribute({
          Name: subscriptionName,
          Value: subscriptionValue,
        })
        attributeList.push(attribute)
        
        authenticatedUser.updateAttributes(attributeList, function(err, result) {
          if (err) {
            console.log(err.message || JSON.stringify(err))
            return
          }
        })
      })
    }
  } catch (err) {
    console.log(err.message || JSON.stringify(err))
  }
}  
