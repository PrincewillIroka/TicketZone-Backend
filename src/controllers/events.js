import Category from "../models/Category";
import Tag from "../models/Tag";
import Event from "../models/Event";

const getCategories = async (request, h) => {
  try {
    const categories = await Category.find();
    const tags = await Tag.find();
    return h.response({ success: true, categories, tags }).code(200);
  } catch (error) {
    console.error("Get categories error:", error);
    return h.response(errorData("Oops something went wrong!")).code(500);
  }
};

const getEvents = async (request, h) => {
  try {
    const { searchParam } = request.payload;
    const events = await Event.find({
      ...(searchParam && {
        $or: [
          { title: new RegExp(searchParam, "i") },
          { venue: new RegExp(searchParam, "i") },
          {
            "category.alias": new RegExp(searchParam, "i"),
          },
        ],
      }),
    }).populate([{ path: "category", select: ["name"] }]);
    return h.response({ success: true, data: events }).code(200);
  } catch (error) {
    console.error("Get events error:", error);
    return h.response(errorData("Oops something went wrong!")).code(500);
  }
};

const getEventsCategory = async (request, h) => {
  try {
    const { alias } = request.payload;
    const category = await Category.findOne({ alias: alias });
    const categoryId = category?._id.toString();
    const events = await Event.find({ category: categoryId }).populate([
      { path: "category", select: ["name"] },
    ]);
    return h.response({ success: true, data: events }).code(200);
  } catch (error) {
    console.error("Get events error:", error);
    return h.response(errorData("Oops something went wrong!")).code(500);
  }
};

export { getCategories, getEvents, getEventsCategory };
