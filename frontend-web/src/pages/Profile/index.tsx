import { Button } from "@material-tailwind/react"

import { useAuthStore } from "../../store/auth"
import { useLogout } from "../../hooks"

const ProfileUser = () => {

  const logout = useLogout();
  const setProfile = useAuthStore(state => state.profile);

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
      onClick={logout}>Logout</Button>
    </div>
  )
}

export default ProfileUser