const A = /* GraphQL */ `
  query A {
    releaseChart(id: "1") {
      chartRanks(pagination: { first: CAR }) {
        edges {
          node {
            id
          }
        }
      }
    }
  }
`;
