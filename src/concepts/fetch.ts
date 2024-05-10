import { z } from "zod";

// With zod, we can check data at runtime
const tourSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.string(),
  image: z.string(),
  info: z.string(),
});

type Tour = z.infer<typeof tourSchema>;

const url = "https://www.course-api.com/react-tours-project";

async function fetchData(url: string): Promise<Tour[]> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const rawData: Tour[] = await response.json();
    const result = tourSchema.array().safeParse(rawData);
    if (!result.success) {
      throw new Error(`Invalid data: ${result.error}`);
    }
    console.log(result);
    return result.data;
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : "Unknown error";
    console.log(errMsg);
    return [];
  }
}

const tours = await fetchData(url);
tours.map((tour: Tour) => console.log(tour.name));
