import {Box, Card, Stack, TextField, Typography} from "@mui/material";
import {BoxProps} from "@mui/material/Box/Box";
import {useEffect, useState} from "react";
import {SERVER_URL} from "../../consts";

interface ILRProps extends BoxProps {

}

const lr_server_url = SERVER_URL + "/lr-8/makeimage";

export default function LR8({...props}: ILRProps) {
    const [width, setWidth] = useState(50);
    const [height, setHeight] = useState(50);

    const [imageSrc, setImageSrc] = useState<string | null>(null);

    useEffect(() => {
        fetch(lr_server_url + '?width=' + width + '&height=' + height)
            .then(response => response.blob())
            .then(images => {
                // Then create a local URL for that image and print it
                let outside = URL.createObjectURL(images);
                setImageSrc(outside);
            })
    }, [width, height]);

    return (
        <Box>
            <Typography variant={"h4"} textAlign={"center"} sx={{mt: 1}}>
                LR8
            </Typography>
            <Stack alignItems={"center"}>

                <Stack spacing={1} sx={{mt: 8, width: 400}}>
                    <TextField variant={"outlined"} label={"Ширина"} fullWidth type={"number"}
                               value={width}
                               onChange={(e) => setWidth(Number(e.target.value))}
                    />
                    <TextField variant={"outlined"} label={"Высота"} fullWidth type={"number"}
                               value={height}
                               onChange={(e) => setHeight(Number(e.target.value))}
                    />
                </Stack>
                <img src={imageSrc} alt="Fetched from endpoint" style={{width: 'auto', height: 'auto'}}/>


            </Stack>
        </Box>
    )
}
