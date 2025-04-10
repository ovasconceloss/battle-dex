import fastify from "./fastify";

const start = async () => {
    try {
        fastify.listen({ port: 3000}, (error, address) => {
            if (error) {
                fastify.log.error(error);
                process.exit(1);
            }
            fastify.log.info(`Server is running at ${address}`);
        });
    } catch (error) {
        console.error(`Failure during server initialization: ${error}`);
        process.exit(1);
    }
}

start();