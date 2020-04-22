class SchemaService{
    findWidgetById = async(nuid, domain, tid) => {
        const response = await fetch(`http://wbdv-generic-server.herokuapp.com/api/${nuid}/${domain}/${tid}`)
        return response.json()
    }
    updateWidgetById = async(nuid, domain, tid, topic) => {
        const response = await fetch(`http://wbdv-generic-server.herokuapp.com/api/${nuid}/${domain}/${tid}`,{
            method: 'PUT',
            body: JSON.stringify(topic),
            headers: {
                'content-type': 'application/json'
            }
        })
        return response.json()
    }
    deleteWidgetById = async(nuid, domain, tid) => {
        const response = await fetch(`http://wbdv-generic-server.herokuapp.com/api/${nuid}/${domain}/${tid}`,{
            method: 'DELETE'
        })
        return response.json()
    }
}
export default SchemaService;