import cron from "node-cron";

export const testing = ()  => {
console.log("testing function scheduled");
  cron.schedule("25 15 * * *", () => {
    console.log("This is a test cron job running every minute");
  });
};

