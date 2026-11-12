import { config } from "dotenv";
config();

import siteIds from "./siteIds.json" with { type: "json" };
import customization from "./customization.json" with { type: "json" };

async function getCustomization(site, org, token) {
  const response = await fetch(
    `https://api.gitbook.com/v1/orgs/${org}/sites/${site}/customization`,
    { headers: { Authorization: `Bearer ${token}` } },
  );
  if (response.ok) {
    return await response.json();
  } else {
    throw new Error(`Failed to fetch Customization: ${response.status}`)
  }
}

async function postCustomization(site, org, token, newCustomization) {
  const response = await fetch(
    `https://api.gitbook.com/v1/orgs/${org}/sites/${site}/customization`,
    {
      method: "PUT",
      body: JSON.stringify(newCustomization),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    },
  );
  if (!response.ok) {
    throw new Error(`Failed to post updated Customization: ${response.status}`);
  }
}

async function updateCustomization(siteId, organization, token) {
  const oldCustomization = await getCustomization(siteId, organization, token);
  const newCustomization = { ...oldCustomization, ...customization };
  await postCustomization(siteId, organization, token, newCustomization);
}

async function main() {
  if (process.argv.length === 2) {
    console.error("Input repo name or 'all'");
    process.exit(1);
  }
  const siteName = process.argv[2];

  const organization = process.env.ORGANIZATION;
  const token = process.env.TOKEN;
  if (!organization || !token){
    console.error(`Environment variable ${organization ? "ORGANIZATION" : "TOKEN"} is missing.`)
  }
  if (siteName === "all") {
    await Promise.all(
      Object.keys(siteIds).map((id) => {
      console.log(`Updating site: ${id}`);
      return updateCustomization(siteIds[id], organization, token);
    }));
  } else {
    const siteId = siteIds[siteName.toUpperCase()];
    if (!siteId){
        throw new Error(`No site ID found for ${siteName}`)
    }
    await updateCustomization(siteId, organization, token);
  }
}

main();
