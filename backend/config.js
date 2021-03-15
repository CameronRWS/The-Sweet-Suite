const env = process.env;

const config = {
    db: { 
        host: env.DB_HOST || 'coms-319-g08.cs.iastate.edu',
        user: env.DB_USER || 'g08',
        password: env.DB_PASSWORD || 'TestPassword48$',
        database: env.DB_NAME || 'TheSweetSuite',
    },
    listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;