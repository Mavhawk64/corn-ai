# Generated by Django 3.2 on 2022-12-13 21:29

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BoxImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('x', models.FloatField(default=0.0)),
                ('y', models.FloatField(default=0.0)),
                ('w', models.FloatField(default=0.0)),
                ('h', models.FloatField(default=0.0)),
            ],
        ),
        migrations.CreateModel(
            name='CornImage',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('imageName', models.TextField()),
                ('actualBoxes', models.ManyToManyField(default=None, related_name='actualBoxes', to='API.BoxImage')),
                ('predictedBox', models.ManyToManyField(default=None, related_name='predictedBox', to='API.BoxImage')),
            ],
        ),
        migrations.CreateModel(
            name='History',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firebase_user_id', models.CharField(max_length=128)),
                ('is_sick_choice', models.BooleanField(default=False)),
                ('date_completed', models.DateTimeField(auto_now_add=True)),
                ('corn_images', models.ManyToManyField(related_name='histories', to='API.CornImage')),
            ],
        ),
    ]
