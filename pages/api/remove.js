export default async (req, res) => {
    if(!req.query.todo) {
        return res.status(400).send("todo parameter required.")
    }
    let todo = encodeURI(req.query.todo)

    const token = "AYpjACQgM2FiN2E0OGYtOWY3Mi00NDdmLThmMWQtZTBhMTA4YWViN2FiYWEyOWY3NDkyMWJmNGU4MTkzZWRjNGUyMWU3ZWRlMDA=";
    const url = "https://eu1-main-crane-35427.upstash.io/lrange/todo/0/100?_token=" + token;

    return fetch(url)
        .then(r => r.json())
        .then(data => {
            let result = JSON.stringify(data.result)
            return res.status(200).json(result)
        })
}
