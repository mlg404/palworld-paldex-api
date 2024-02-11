import { SuitabilitiesEnum } from "@enums/index";
import { describe, expect, test } from "bun:test";
import { execute as getPalPage } from "../list-pals.usecase";

describe("ListPalsUseCase", () => {
  test("should return a page of pals", async () => {
    const result = getPalPage({});
    expect(result).toMatchObject({
      content: expect.any(Array),
      total: expect.any(Number),
      page: 1,
      limit: 10,
    });
  });

  test("should return a page of pals with a limit", () => {
    const result = getPalPage({ limit: 5 });
    expect(result).toMatchObject({
      content: expect.any(Array),
      total: expect.any(Number),
      page: 1,
      limit: 5,
    });
  });

  test("should return correct page given page prop", () => {
    const result = getPalPage({ page: 2 });
    expect(result).toMatchObject({
      content: expect.any(Array),
      total: expect.any(Number),
      page: 2,
      limit: 10,
    });
  });

  test("should filter pals by exact name", () => {
    const palName = "Relaxaurus";

    const result = getPalPage({
      filter: {
        name: palName,
      },
    });

    expect(result.content).toHaveLength(1);
  });

  // TODO: Enhance search by type
  // The suitabilities key does not exist on the JSON
  test.skip("should filter pals by suitability", () => {
    const palSuitability = SuitabilitiesEnum.ELECTRICITY;

    const result = getPalPage({
      filter: {
        // This key does not exist on JSON
        suitabilities: palSuitability,
      },
    });

    expect(result.content).toHaveLength(2);
  });

  // TODO: Enhance search by partial name
  test.skip("should filter pals by partial name", () => {
    const palPartialName = "Jolt";

    const result = getPalPage({
      filter: {
        name: palPartialName,
      },
    });

    expect(result.content).toHaveLength(2);
  });

  // TODO: Enhance search by partial description
  test.skip("should filter pals by partial description", () => {
    const palDescription = "When thrown at an enemy";

    const result = getPalPage({
      filter: {
        description: palDescription,
      },
    });

    expect(result.content).toHaveLength(1);
  });
});
