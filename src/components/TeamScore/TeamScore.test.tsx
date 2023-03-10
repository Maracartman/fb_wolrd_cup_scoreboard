import React from "react";
import { screen, render } from "src/utils/test";
import { TeamScore } from "./TeamScore";

const teamScoreProps = {
    home: true,
    team: {
      country: "Venezuela",
      flagImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/1200px-Flag_of_Venezuela.svg.png",
    },
    score: 10,
  }

describe("TeamScore component test suite", () => {
  it("match the snapshot", () => {
    const { container } = render(<TeamScore {...teamScoreProps} />);

    expect(container).toMatchSnapshot();
  });
  it("Display the team's country", () => {
    render(<TeamScore {...teamScoreProps} />)

    expect(screen.getByText("Venezuela")).toBeInTheDocument()
  });

  it("Display the team's score", () => {
    render(<TeamScore {...teamScoreProps} />)

    expect(screen.getByText("10")).toBeInTheDocument()
  });

  it('Display the text "Home" in the team score', () => {
    render(<TeamScore {...teamScoreProps} />)

    expect(screen.getByText("Home")).toBeInTheDocument()
  });

  it('Display the text "Away" in the team score', () => {
    render(<TeamScore {...teamScoreProps} home={false}/>)

    expect(screen.getByText("Away")).toBeInTheDocument()
  });

  it("display the country flag if it's passed", () => {
    render(<TeamScore {...teamScoreProps} />)

    expect(screen.getByAltText("Country flag")).toBeInTheDocument()
  })

  it("display a neutral state (neither team name nor score) if no team is passed", () => {
    const noTeamProps = {
      home: true,
      team: undefined,
      score: 10,
    }

    render(<TeamScore {...noTeamProps} />)

    expect(screen.queryByAltText("Country flag")).not.toBeInTheDocument()
    expect(screen.getByText("---")).toBeInTheDocument()
    expect(screen.getByText("00")).toBeInTheDocument()
  })
});
