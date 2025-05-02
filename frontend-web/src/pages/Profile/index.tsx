import { Button } from "@material-tailwind/react"

import { useAuthStore } from "../../store/auth"
import { useNavigate } from "react-router-dom"

const ProfileUser = () => {

  const logout = useAuthStore(state => state.logout);
  const setProfile = useAuthStore(state => state.profile);
  const navigate = useNavigate();

  return (
    <div>

      <div>
        <h1>Profile</h1>
        <p>Token: {setProfile.token}</p>
        <p>Profile: {JSON.stringify(setProfile.profile)}</p>
      </div>

      <h1>Profile-User View</h1>
      <br />
      <Button color="secondary"
      onClick={() =>{
        logout();
        setTimeout(() => navigate("/login"), 0);
      }}>Logout</Button>
    </div>
  )
}

export default ProfileUser