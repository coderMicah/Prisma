import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();


async function main() {
    await prisma.user.deleteMany()

    //create 
    // const resp = await prisma.user.create({
    //     data: {
    //         name: "John",
    //         age: 15,
    //         email: "johndoe@mainModule.com",
    //         preferences: {
    //             create: {
    //                 emailUpdates: true
    //             }
    //         }
    //     },
    //     include: {
    //         preferences: true
    //     }
    // })

    //create many
    const resp = await prisma.user.createMany({
        data:[
            {
                name:"John Doe",
                email:"johndoe@mail.com",
                age:14
            },
            {
                name:"Jane Doe",
                email:"janedoe@mail.com",
                age:17
            },
        ]
    })

    console.log(resp);


}

main().catch((e) => { console.error(e.message) }).finally(async () => { await prisma.$disconnect() })