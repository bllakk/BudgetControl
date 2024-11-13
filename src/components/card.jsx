import { Card, HStack } from "@chakra-ui/react"
import {
    StatHelpText,
    StatLabel,
    StatRoot,
    StatUpTrend,
    StatDownTrend,
    StatValueText,
} from "@/components/ui/stat"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function CardDefault({name, value}){
    return(
        <Card.Root className="bg-dark-blue-1 cursor-pointer">
                    <Card.Body>
                        <StatRoot>
                            <div className="flex justify-between">
                                <StatLabel>{name}</StatLabel>
                                <FontAwesomeIcon className="text-slate-400" icon={faPlus} />
                            </div>
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