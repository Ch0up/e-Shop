<template>
    <v-card>
        <v-card-title>
            <span class="text-h5">
                <v-icon>mdi-truck-delivery-outline</v-icon>
                Informations de livraison</span>
        </v-card-title>
        <v-card-text>
            <v-row>
                <v-col cols="12" sm="6">
                    <v-text-field label="Nom" type="text" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-text-field label="Prénom" type="text" required></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field label="Adresse" type="text" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-text-field label="Ville" type="text" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-text-field label="Code postal" type="text" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-text-field label="Téléphone" type="text" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-text-field label="E-mail" type="text" required></v-text-field>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>