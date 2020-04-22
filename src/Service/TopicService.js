class TopicService{
    findTopicsForDomain = async (nuid, domainname) => {
        const response = await fetch(`http://wbdv-generic-server.herokuapp.com/api/${nuid}/${domainname}`,{
            method: "GET",
            headers: {
                'content-type': 'application/json'
            }
        })
        return await response.json()
    }
    updateTopic = async (nuid, domainname, topicname, topic) => {
        const response = await fetch(`http://wbdv-generic-server.herokuapp.com/api/${nuid}/${domainname}/${topicname}`,{
            method: 'PUT',
            body: JSON.stringify(topic),
            headers: {
                'content-type': 'application/json'
            }
        })
        return await response.json()
    }
    createTopic = async (nuid, domainname, topic) => {
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
export default TopicService;