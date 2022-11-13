import { MongoClient, ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method != "DELETE") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const data = req.body;
  const client = new MongoClient(process.env.MONGODB_URI);

  try {
    const database = client.db("startup_directory");
    const forum = database.collection("forum");

    const response = await forum.deleteOne({ _id: ObjectId(data._id) });

    res.status(200).json({ message: "Delete forum successfully" });
  } catch (error) {
    res.status(400).json({ message: "Delete forum failed" });
  } finally {
    await client.close();
  }
}
