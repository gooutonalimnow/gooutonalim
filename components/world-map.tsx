"use client"

import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps"
import { getAllCountries } from "@/data/countries-visited"

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

// Map of display names to topojson names for matching
const countryNameMap: Record<string, string[]> = {
  "United States": ["United States of America"],
  "United Arab Emirates": ["United Arab Emirates"],
  "United Kingdom": ["United Kingdom"],
  "South Korea": ["South Korea", "Korea"],
  "North Macedonia": ["Macedonia", "North Macedonia"],
  "Czech Republic": ["Czech Republic", "Czechia"],
  "Bosnia and Herzegovina": ["Bosnia and Herzegovina", "Bosnia and Herz."],
  "Vatican City": ["Vatican"],
  "Timor-Leste": ["Timor-Leste", "East Timor"],
  Micronesia: ["Micronesia", "Federated States of Micronesia"],
}

export function WorldMap() {
  const visitedCountries = getAllCountries()

  const isVisited = (geoName: string): boolean => {
    // Direct match
    if (visitedCountries.includes(geoName)) return true

    // Check mapped names
    for (const [displayName, aliases] of Object.entries(countryNameMap)) {
      if (
        visitedCountries.includes(displayName) &&
        (aliases.includes(geoName) || geoName.includes(displayName))
      ) {
        return true
      }
    }

    // Partial match for territories
    return visitedCountries.some(
      (country) => geoName.includes(country) || country.includes(geoName),
    )
  }

  return (
    <div className="aspect-[2/1] w-full overflow-hidden rounded-sm bg-secondary/50">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 120,
          center: [0, 35],
        }}
        className="h-full w-full"
      >
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const countryName = geo.properties.name
                const visited = isVisited(countryName)

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={visited ? "hsl(205, 55%, 48%)" : "hsl(210, 14%, 83%)"}
                    stroke="hsl(210, 25%, 96%)"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: {
                        fill: visited
                          ? "hsl(205, 55%, 38%)"
                          : "hsl(210, 14%, 75%)",
                        outline: "none",
                        cursor: "pointer",
                      },
                      pressed: { outline: "none" },
                    }}
                  />
                )
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      <div className="flex items-center justify-center gap-6 border-t border-border/60 bg-background/50 px-4 py-3 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <span
            className="h-3 w-3 rounded-sm"
            style={{ backgroundColor: "hsl(205, 55%, 48%)" }}
          />
          <span>Visited</span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="h-3 w-3 rounded-sm"
            style={{ backgroundColor: "hsl(210, 14%, 83%)" }}
          />
          <span>Not yet</span>
        </div>
      </div>
    </div>
  )
}
