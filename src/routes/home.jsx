import { 
    HStack,
    Stack,
    Text,
    Grid,
    GridItem 
} from "@chakra-ui/react"
import { Avatar } from "@/components/ui/avatar"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

import CardDefault from "@/components/card";

import NewTable from "@/components/table";

export default function Home(){
    return(
        <div className="bg-dark-blue-0 w-full h-full min-h-screen flex-col">
            <header className="flex justify-between px-7 py-4">
                <img className="w-36" src="logo-nods.png" alt="" />
                <div>
                    <Stack gap="8">
                        <HStack gap="4">
                        <Avatar name="Gyan Monteiro" size="lg" src="" />
                        <Stack gap="0">
                            <Text fontWeight="medium">Gyan Monteiro</Text>
                            <Text color="fg.muted" textStyle="sm">
                            </Text>
                        </Stack>
                        </HStack>
                    </Stack>
                </div>
            </header>
        <div className=" flex flex-col justify-center items-center">
            <div className="flex gap-1 font-roboto mb-4 items-center">
                <h3 className="font-bold">Novembro</h3>
                <span>2024</span>
                <span className="cursor-pointer border ml-2 rounded-full px-2 py-0.5"><FontAwesomeIcon icon={faArrowDown} /></span>
            </div>
            <div className="w-2/3 grid grid-rows-2 grid-cols-2 gap-4">
                    <GridItem colSpan={1}>
                        <CardDefault
                            name={"Ganhos"}
                            value={8456.4}
                        />
                    </GridItem>
                    <GridItem colSpan={1}>
                        <CardDefault
                            name={"Despesas"}
                            value={290}
                        />
                    </GridItem>
                    <GridItem colSpan={1}>
                        <CardDefault
                            name={"Gastos Conta"}
                            value={90}
                        />
                    </GridItem>
                    <GridItem colSpan={1}>
                        <CardDefault
                            name={"Gastos Cartão"}
                            value={200}
                        />
                    </GridItem>
            </div>
        </div>
        <NewTable/>
    </div>
    )
}