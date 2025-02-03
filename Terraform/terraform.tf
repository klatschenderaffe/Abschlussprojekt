terraform {
    backend "s3" {
      bucket = "vanventura" # hier müsst ihr euren eigenen S3 Bucket hinzufügen
      key = "github-actions.tfstate"
      region = "eu-central-1"
    }
}