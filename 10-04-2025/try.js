class TechOfError extends Error {
  constructor(message) {
    super(message);
    this.name = "TechOfError";
  }
}

try {
  console.log("Try");
  throw new Error("An Error occurred");
} catch (error) {
    if (error instanceof TechOfError) {
      console.error("Caught a TechOfError:", error);
    } else {
      console.error("Caught an error:", error);
    }
} finally {
  console.log("Finally.");
}