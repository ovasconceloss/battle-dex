import fastify from "./fastify";

const start = () => {
    try {
        fastify.listen({ port: 8080 }, (error, address) => {
            if (error) {
                fastify.log.error(`A failure occurred with fastify: ${error}`);
                process.exit(1);
            }

            fastify.log.info(`Server running at the address: ${address}`);
        });
    } catch (error) {
        fastify.log.error(`Failed to start the server with fastify: ${error}`);
        process.exit(1);
    }
}

start();