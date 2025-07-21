import prisma from "../models/prisma_client.js"

export const getListEmails = async ( req, res ) => {
  const listEmails = await prisma.listEmail.findMany()
  res.json( listEmails )
}

export const getListEmailById = async ( req, res ) => {
  const { id } = req.params
  const listEmail = await prisma.listEmail.findUnique( {
    where: { id: parseInt( id, 10 ) },
  } )

  if ( !listEmail ) {
    return res.status( 404 ).json( { error: "List email not found" } )
  }

  res.json( listEmail )
}

// TODO: validar email correctamente
// const validateEmail = ( email ) => {
//   const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
//   return re.test( String( email ).toLowerCase() )
// }

export const createListEmail = async ( req, res ) => {
  const { fullname, tel, email, message, source } = req.body

  if ( !email ) {
    return res.status( 400 ).json( { error: "All fields are required" } )
  }

  // if ( validateEmail( email ) ) { return res.status( 400 ).json( { error: "Invalid email format" } ) }

  const existingEmail = await prisma.listEmail.findFirst( {
    where: { email },
  } )

  if ( existingEmail ) {
    return res.status( 400 ).json( { error: "Email already exists" } )
  }

  try {
    const newListEmail = await prisma.listEmail.create( {
      data: {
        fullname,
        tel,
        email,
        message,
        source: source || "form-list-email-backend"
      },
    } )
    res.status( 201 ).json( newListEmail )
  } catch ( error ) {
    console.error( "Error creating list email:", error )
    res.status( 500 ).json( { error: "Internal server error" } )
  }
}


// fullname  String ?
// email     String ?
//   tel       String ?
//     message   String ?
//       source    String ? @default ( "form-list-email" )
