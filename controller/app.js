const fs = require('fs/promises');
const path = require('path');

// follow the below pattern for creating controllers for a particular  endpoint

async function generateFileTree(directory) {
    const tree = {}

    async function buildTree(currentDir, currentTree) {
        

        
        const files = await fs.readdir(currentDir)

        for (const file of files) {
            if (file === 'node_modules' || file === '.next' || file === '.git' ) {
                continue; // Skip the node_modules directory
            }

            const filePath = path.join(currentDir, file)
            const stat = await fs.stat(filePath)

            if (stat.isDirectory()) {
                currentTree[file] = {}
                await buildTree(filePath, currentTree[file])
            } else {
                currentTree[file] = null
            }
        }

     
    }

    await buildTree(directory, tree);
    return tree
}

const firstapi = (req,res)=>{

    try {

        //Write down the api logic here 

        res.json({message: "this is  first api"})
        
    } catch (error) {
        res.json(error)
    }
}


const files = async (req,res)=>{

    try {

       const filetree = await generateFileTree('./user');

       res.json({ tree: filetree })
        
    } catch (error) {
        res.json(error)
    }
}

const filecontent = async (req,res)=>{

    try {
        const path = req.query.path;
        const content = await fs.readFile(`./user${path}`, 'utf-8')
        res.json({ content })
        
    } catch (error) {
        res.json(error)
    }
}





module.exports = {firstapi , files, filecontent}; //export all the controllers declared above 