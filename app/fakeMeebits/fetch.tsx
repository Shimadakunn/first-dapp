
export default async function SearchBar(tokenID: Number) {
      try {
        const response = await fetch(
          `https://raw.githubusercontent.com/AymericNoel/erc721-ux/main/claimerV1-tools/output-sig.json`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        const tokenData = result.find(data=> data.tokenNumber === tokenID);
        return tokenData ? tokenData.signature : null;
      } catch (err: any) {
        throw new Error("Error fetching data:", err.message);
    }
}