import {
    StatDownTrend,
    StatLabel,
    StatRoot,
    StatValueText,
  } from "@/components/ui/stat"

export default function Home(){
    return(
       <StatRoot>
      <StatLabel>Unique visitors</StatLabel>
      <StatValueText>192.1k</StatValueText>
      <StatDownTrend variant="plain" px="0">
        1.9%
      </StatDownTrend>
    </StatRoot>
    )
}