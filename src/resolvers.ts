export const resolvers = {
    Query: {
      greetings: () => "GraphQL is Awesome",
      welcome: (parent:any, args:any) => `Hello ${args.name}`,
    },
  };
