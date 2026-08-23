export default {
  async fetch(request, env) {
    const url =
      "https://api.the-odds-api.com/v4/sports/basketball_nba/odds/" +
      "?regions=us&markets=h2h,spreads,totals&oddsFormat=decimal&apiKey=" +
      env.ODDS_API_KEY;

    try {
      const response = await fetch(url);
      const data = await response.text();

      return new Response(data, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      });
    } catch (error) {
      return new Response(
        JSON.stringify({ error: error.message }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" }
        }
      );//
    }
  }
};
