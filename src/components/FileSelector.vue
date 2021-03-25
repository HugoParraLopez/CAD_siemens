<template>
    <div class="my-card">
        <h3>DOCUMENTOS</h3> <br>
        <ul>
            <div class="alert alert-info">
                <p class="file-tile">Garantias</p><button class="btn btn-success">Abrir</button>
            </div>
            <div class="alert alert-info">
                <p class="file-tile">Esquematico de Interruptor</p><button class="btn btn-success">Abrir</button>
            </div>
            <div class="alert alert-info">
                <p class="file-tile">Manual de usuario</p><button class="btn btn-success">Abrir</button>
            </div>
            <app-file-item></app-file-item>
        </ul>
    </div>
</template>

<script>
import FileItem from './FileItem'
export default {
    setup() {
        
    },
    components: {
        appFileItem: FileItem,
    },
}
</script>

<style scoped>  
    .file-tile {
        display: inline-block !important;
        margin: 2px 5px;
    }
</style>