class UserService{
    findAllNuids = async () => {
        const response = await fetch("http://wbdv-generic-server.herokuapp.com/shh/nuids",{
            method: "GET",
            headers: {
                'content-type': 'application/json'
            }
        })
        return await response.json()
    }
}
export default UserService;