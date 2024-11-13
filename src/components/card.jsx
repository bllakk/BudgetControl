import { Card, HStack } from "@chakra-ui/react"
import {
    StatHelpText,
    StatLabel,
    StatRoot,
    StatUpTrend,
    StatDownTrend,
    StatValueText,
} from "@/components/ui/stat"

export default function CardDefault({name, value}){
    return(
        <Card.Root className="bg-dark-blue-1">
                    <Card.Body>
                        <StatRoot>
                            <StatLabel>{name}</StatLabel>
                            <HStack>
                                <StatValueText
                                value={value}
                                formatOptions={{ style: "currency", currency: "BRL" }}
                                />
                                <StatUpTrend>12%</StatUpTrend>
                            </HStack>
                            <StatHelpText>Em comparação ao mês passado</StatHelpText>
                        </StatRoot>
                    </Card.Body>
                </Card.Root>
    )
}