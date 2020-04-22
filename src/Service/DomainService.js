class DomainService{
    findDomainsForUser = async (nuid) => {
        const response = await fetch(`http://wbdv-generic-server.herokuapp.com/shh/nuids/${nuid}/domains`,{
            method: "GET",
            headers: {
                'content-type': 'application/json'
            }
        })
        return await response.json()
    }
    createDomain = async (nuid, domainname, topic) => {
        const response = await fetch(`http://wbdv-generic-server.herokuapp.com/api/${nuid}/${domainname}`, {
            method: "POST",
            body: JSON.stringify(topic),
            headers: {
                'content-type': 'application/json'
            }
        })
        return await response.json()
    }
}
export default DomainService;