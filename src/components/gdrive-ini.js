import { useEffect } from 'react'

const CLIENT_ID = process.env.GOOGLE_DRIVE_CLIENT_ID
const API_KEY = process.env.GOOGLE_DRIVE_API_KEY     
// const SCOPES = "https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.metadata https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/drive.photos.readonly https://www.googleapis.com/auth/drive.readonly"
const SCOPES = "https://www.googleapis.com/auth/drive.file"

const GDriveInit = ({ setGSignedIn }) => {
  useEffect(() => {
    const handleClientLoad = () => {
      const script = document.createElement("script")
      script.src = "https://apis.google.com/js/api.js"
      document.body.appendChild(script)
      script.onload = () => {
        window['gapi'].load('client:auth2', initClient);
      }
    }  
 
    const updateSigninStatus = (isSignedIn) => {
      setGSignedIn(isSignedIn)
    }

    const initClient = () => {
      window.gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],
        scope: SCOPES        
      })
      .then(() => {
        // Listen for sign-in state changes.
        window.gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus)
        // Handle the initial sign-in state.
        updateSigninStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get())
      })
      .catch((e) => {
        console.log(e)
      })
  }

  handleClientLoad()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}

export default GDriveInit