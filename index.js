exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,     
        "headers": {
            "my_header": "my_value",
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*' 
        },
        body: JSON.stringify('Hello from Lambda CI/CD using github actions'),
    };
    return response;
};
